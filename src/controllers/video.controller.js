import mongoose,{isValidObjectId} from "mongoose"
import {Video} from "../models/video.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const getAllVideo = asyncHandler(async(req,res)=>{
    const {page =1,limit=1,query,sortBy,sortType,userId} =req.query
    //Todo :to get all videos based on query , sort , pagination
})
const publishAVideo = asyncHandler(async(req,res)=>{
    const {title,description} =req.body
    //todo : get video, upload to cloudinary , create video
})

const getVideoById = asyncHandler(async(req,res)=>{
    const {videoId} = req.params
    //todo get video by id
})
const updateVideo = asyncHandler(async(req,res)=>{
    const {videoId} = req.params
    // tod : update video title like title , description , thumbnail

})

const deleteVideo = asyncHandler(async(req,res)=>{
    const {videoId} = req.params
    //todo : delete video
})

const togglePublishStatus = asyncHandler(async(req,res)=>{
    const {VideoId}=req.params
}) 