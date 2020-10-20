import React, { useState, useEffect } from 'react'
import firebase from '../Firebase';
import './CombineSearch.css'
import AllInputText from '../Component/AllInputText/AllInputText'
import DataTable from '../Component/DataTable/DataTable'
import { Link } from 'react-router-dom'


function CombineSearch({ link }) {

    const [valueText, setValueText] = useState({ bu: "", domain: "", service: "", offering: "" })
    const db = firebase.firestore();

    const [allFileValue, setAllFileValue] = useState([])
    console.log(link)
    const allOnloadArray = []

    const updateInput = (e) => {
        setValueText({
            // bu: valueText.bu,
            // domain: valueText.domian,
            // service: valueText.service,
            // offering: valueText.offering,
            ...valueText,
            [e.target.name]: e.target.value
        });
    }


    const displaySearch = e => {
        e.preventDefault()
        db.collection('users')
            .where("bu", "==", `${valueText.bu}`)
            .where("domain", "==", `${valueText.domain}`)
            .where("offering", "==", `${valueText.offering}`)
            .get()
            .then((doc) => {

                console.log(doc);
                console.log("i m render 2nd time")
                if (doc.docs.length > 0) {
                    let allSearchFile = doc.docs[0].data().file
                    console.log("All Search File")
                    console.log(allSearchFile)
                    setAllFileValue(allSearchFile)
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {

        db.collection('users')
            .get()
            .then(results => {
                const allOnloadArray = []
                results.docs.forEach(items => {
                    items.data().file.forEach(item => {
                        if (allOnloadArray.length < 10) {
                            if (allOnloadArray.length === 0) {
                                allOnloadArray.push(item)

                            }
                            let index;
                            for (let i = 0; i < allOnloadArray.length; i++) {
                                if (new Date(item.createdDate) > new Date(allOnloadArray[i].createdDate)) {

                                    // shifting
                                    // let temp = allOnloadArray[i]
                                    // allOnloadArray[i] = item
                                    // item = temp
                                    index=i;
                                    break;

                                }
                                

                            }
                            
                            index || index==0?
                            allOnloadArray.splice(index, 0, item):
                            allOnloadArray.push(item)



                        }
                        else {
                            // for (let i = 0; i < allOnloadArray.length; i++) {
                            //     if (new Date(item.createdDate) > new  Date(allOnloadArray[i].createdDate)) {
                            //         allOnloadArray.splice(i, 0, item)
                            //         allOnloadArray.pop()
                            //     }
                                
                            // }
                        }
                    })



                    // item.data().file.forEach(file => {
                    //     allOnloadArray.push(file)
                    //     console.log(file)
                    // })

                })

                setAllFileValue(allOnloadArray)


            })
            .catch(error =>
                console.log(error)
            )



    }, [])

    return (
        <div className="mainCombineDiv" style={{ flex: 0.70 }}>
            <form className="main_search" onSubmit={displaySearch}>

                <AllInputText inputChange={updateInput}
                    valueTextAll={{
                        bu: valueText.bu,
                        domain: valueText.domain,
                        offering: valueText.offering,
                        service: valueText.service

                    }} />
                <div className="uploadSubmit">

                    <input className="searchbutton" type="button" name="Upload" value="Upload" onClick={(e) => {
                        e.preventDefault(); link.history.push("/upload")
                    }} />
                    <button className="searchbutton" type="submit">Search</button>

                </div>

            </form>
            {/* <TableSearch/> */}
            <div className="dataTable">
            {allFileValue.length > 0 ?
                <DataTable allData={allFileValue} /> : null}

            </div>
            
        </div>


    )
}

export default CombineSearch
