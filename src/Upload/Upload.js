import React, { Component } from 'react';
import firebase from '../Firebase';
import { storage } from '../Firebase';
import './Upload.css';
import InputText from '../InputText/InputText'


class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bu: "",
            domain: "",
            offering: "",
            opentag: "",
            files: null,
            allItems: [],
        }
        this.db = firebase.firestore();

    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChange = (files) => {
        this.setState({
            files: files
        }, () => { console.log(files) })
    }

    addUser = e => {
        e.preventDefault();

        let file = this.state.files[0]

        //---

        console.log(file)
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
        const uploadTask = storage.ref(`${this.state.bu}/${this.state.domain}/${this.state.offering}/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            (result) => {
                console.log(result)

                uploadTask.snapshot.ref.getDownloadURL()
                    .then((url) => {
                        this.db.collection('users')
                            .where("bu", "==", `${this.state.bu}`)
                            .where("domain", "==", `${this.state.domain}`)
                            .where("offering", "==", `${this.state.offering}`)
                            .get()
                            .then((doc) => {
                                console.log("------Hello Rey-------");
                                console.log(doc);
                                if (doc.docs.length > 0) {
                                    console.log(doc.docs[0].id)
                                    let documentId = doc.docs[0].id
                                    let allFile = doc.docs[0].data().file
                                    let filteredFile = allFile.filter((item) => {
                                        return item.name !== file.name
                                    })

                                    filteredFile.push({ name: file.name, url })






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
                                        opentag: this.state.opentag,
                                        file: [{
                                            name: file.name,
                                            url
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
    };

    getAllUsers = () => {

        return this.items;
    }


    render() {
        console.log("Render-->" + this.state.count)
        return (
            <>
                <InputText/>
                {/* <form onSubmit={this.addUser}>
                    <div className="main_Row">
                        <div className="bu_name">
                            <label>BU</label>
                            <input className="inputText" onChange={this.updateInput}
                                name="bu" type="text" value={this.state.bu}
                            />
                        </div>
                        <div className="domain_row">
                            <label>Domain</label>
                            <input className="inputText" onChange={this.updateInput}
                                name="domain" type="text" value={this.state.domain}
                            />

                        </div>
                        <div className="">
                            <label>Offering</label>
                            <input className="inputText" onChange={this.updateInput}
                                name="offering" type="text" value={this.state.offering}
                            />


                        </div>

                    </div> */}

                    {/* <div className="fieldTextbox">



                    </div>
                    <div className="labelTag">
                        <label>OpenTag</label>
                        <label>Browse File</label>
                        <span>Attachments</span>


                    </div>

                    <div className="browseFile">
                        <textarea id="OpenTag" onChange={this.updateInput}
                            name="opentag" className="tags" value={this.state.opentag}
                        />
                        <input type="file" name="files"
                            onChange={(e) => { this.handleChange(e.target.files) }} multiple />
                        <span>Images.png</span>
                        <button type="submit">Submit</button>

                    </div> */}
                {/* </form> */}


            </>
        )
    }
    componentDidMount() {
        this.getAllUsers()
    }
}

export default Upload;


