import React from "react"
import reactDom from "react-dom"
import {useParams} from "react-router-dom"


function GalleryView(props){
    let {galleryid} = useParams()
    // console.log(galleryid)
    let element = props.galleries.find(ele => ele.galleryid === +galleryid)
    // console.log(element)
    return(
    <React.Fragment>
    <h1>hello from gallery view</h1>
        <h2>{element.name}</h2>
    </React.Fragment>)
} 

export default GalleryView