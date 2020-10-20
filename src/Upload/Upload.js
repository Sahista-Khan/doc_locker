import React, { Component } from 'react';
import firebase from '../Firebase';
import { storage } from '../Firebase';
import './Upload.css';
import '../InputText/InputText.css';
import OpentagImg from '../assets/Image/Opentag.png'
import PredefinedImg from '../assets/Image/PredefinedTag.png'
import BrowseFileImg from '../assets/Image/BrowseFile.jpg'
import Predefined from '../Predefined/Predefined'
import AllInputText from '../Component/AllInputText/AllInputText';



class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bu: "",
            domain: "",
            offering: "",
            service: "",
            predefinedtag: "",
            opentag: "",
            files: null,
            allItems: [],
            
        }
        this.db = firebase.firestore();

    }

    updateInput = (e) => {                  
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChange = (files) => {
        this.setState({
            files: files
        })
    }

    addUser = e => {
        e.preventDefault();

        // let file = this.state.files[0]
        // console.log()
        //---

        //  console.log(file)
        // retrival generic for url inside sub folder from file storage
        // storage
        //     .ref(`${this.state.bu}/${this.state.domain}/${this.state.offering}`)
        //     .child("download (1).jpg")
        //     .getDownloadURL()
        //     .then(url => {

        //         console.log(url)
        //         console.log(storage)

        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })


        // retrive document from cloud Firestore on given where condition




        //uploading a file to storage
        for (let i = 0; i < this.state.files.length; i++) {
            console.log("Inside Loop " + i)
            let file = this.state.files[i]
            const uploadTask = storage.ref(`${this.state.bu}/${this.state.domain}/${this.state.offering}/${file.name}`).put(file);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                (result) => {
                    console.log("Inside Upload Succes--> s" + i)
                    console.log(result)

                    uploadTask.snapshot.ref.getDownloadURL()
                        .then((url) => {
                            console.log("Inside URL Succes--> s" + i)

                            this.db.collection('users')
                                .where("bu", "==", `${this.state.bu}`)
                                .where("domain", "==", `${this.state.domain}`)
                                .where("offering", "==", `${this.state.offering}`)
                                .get()
                                .then((doc) => {
                                    console.log("------Hello Rey------- " + i);

                                    console.log(doc);
                                    if (doc.docs.length > 0) {
                                        console.log(doc.docs[0].id)
                                        let documentId = doc.docs[0].id
                                        let allFile = doc.docs[0].data().file
                                        console.log("Modified By Data")
                                        console.log(doc.docs[0].data().file)


                                        let filteredFile = allFile.filter((item) => {
                                        
                                            return item.name !== file.name 
                                            
                                        })

                                        filteredFile.unshift({
                                             name: file.name, 
                                             url ,   
                                             createdDate: new Date().toString(),
                                             createBy: 'sahistakhan',
                                             modifiedDate: new Date().toString(),
                                             modifiedBy: 'sahistakhan'
                                            
                                            })






                                        if (allFile.length > 0 && allFile.name == this.state.file) {
                                            this.db.collection('users')
                                                .doc(documentId)
                                                .update({
                                                    file: filteredFile,

                                                });

                                        }



                                    }
                                    else {
                                        console.log(url)
                                        const userRef = this.db.collection("users").add({
                                            bu: this.state.bu,
                                            domain: this.state.domain,
                                            offering: this.state.offering,
                                            service: this.state.service,
                                            opentag: this.state.opentag,
                                            predefinedtag: this.state.predefinedtag,
                                            file: [{
                                                name: file.name,
                                                url,
                                                createdDate: new Date().toString(),
                                                createBy: 'sahistakhan',
                                                modifiedDate: new Date().toString(),
                                                modifiedBy: 'sahistakhan'
                                            }]

                                        })
                                            .then((result) => {
                                                console.log(result)
                                            }

                                            )
                                            .catch((error) => {
                                                console.log(error)
                                            })
                                    }
                                });



                        })
                }

            );

        };//sahista
    };

    getAllUsers = () => {

        return this.items;
    }

    componentDidMount() {
        this.getAllUsers()
    }

    render() {
        console.log("Render-->" + this.state.count)
        return (
            <>
                <form className="main_Upload" onSubmit={this.addUser} >
                    <AllInputText inputChange={this.updateInput} 
                            valueTextAll={{
                                bu: this.state.bu,
                                domain:this.state.domain,
                                offering:this.state.offering,
                                service:this.state.service

                            }}/>
                    <div class="main_second">

                        <Predefined label="Predefined Tag" imgsrc={PredefinedImg} inputChange={this.updateInput}
                            valueText={this.state.predefinedtag}
                        />

                        <div className="subunit_name">
                            <div className="imageLabel">
                                <img src={BrowseFileImg} alt="" className="image" />
                                <label>Browse File</label>

                            </div>
                            {/* <input className="inputText"
                                name="files" type="file" onChange={(e) => { this.handleChange(e.target.files) }}
                                 multiple
                                
                            /> */}
                            <input className="inputText"
                                name="files" type="text"
                                onClick={(e) => this.upload.click()}

                            />

                            <input id="myInput" type="file" ref={(ref) => this.upload = ref} style={{ display: 'none' }}
                                onChange={(e) => { this.handleChange(e.target.files) }}
                                multiple
                            />



                        </div>


                    </div>
                    <div className="openTag">
                        <div className="openTag_Unit">
                            <div className="imageLabel">
                                <img src={OpentagImg} alt="" className="image" />
                                <label>Open Tag</label>
                            </div>
                            <input className="inputText"
                                name="opentag" type="text" 
                                onChange={this.updateInput}
                                value={this.state.opentag}
                            />


                        </div>
                        <div className="attachDoc">

                            <label>Attatchments</label>
                            <div className="allFiles">
                                <ul>{this.state.files ? this.state.files[0].name : ""}</ul>
                            </div>
                        </div>

                    </div>
                    <button className="button" type="submit">Submit</button>

                </form>





            </>
        )
    }
   
}

export default Upload;


