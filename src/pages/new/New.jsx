import React, { useState } from "react";
import './new.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { newUserForm } from "../../formSource";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



function New({inputs , title})
{
    
    const [imageFile , setImageFile] = useState(null);
    console.log(imageFile);
    return <div className="new">
        <Sidebar></Sidebar>
        <div className="newContainer">
            <Navbar></Navbar>
            <div className="newBody">
                <div className="top">
                    <h1 className="title">{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={imageFile?URL.createObjectURL(imageFile):"https://www.shutterstock.com/image-vector/not-available-grunge-rubber-stamp-260nw-549465907.jpg"} alt="" className="userImage" />
                    </div>
                    <div className="right">
                        <form action="" className="form">
                        <div className="formInput imageInput" >
                                <label htmlFor="fileInput" className="imageInputLabel"><span>Image :</span> <CloudUploadIcon className="icon"/></label>
                                <input hidden type="file" name="image" id="fileInput" onChange={(event)=>{setImageFile(event.target.files[0])}} />
                            </div>
                            {inputs.map((formInputData)=>{
                                return <div className="formInput">
                                <label className="inputLabel"
                                htmlFor={formInputData.label}>{formInputData.label} </label>

                                <input 
                                className="inputField"
                                id={formInputData.label} type={formInputData.type} 
                                placeholder={formInputData.placeholder} />
                            </div>
                            })}

                            <div className="formAction"><button type="submit" className="submit-btn">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>;
}
export default New;