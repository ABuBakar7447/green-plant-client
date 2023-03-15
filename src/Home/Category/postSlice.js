import axios from "axios";

const {  createSlice, createAsyncThunk } = require("@reduxjs/toolkit") ;


export const fetchPosts = createAsyncThunk("posts/fetchPosts",
 async()=>{
    const res = await axios.get("http://localhost:5000/catagory");
    console.log(res.data)
    return res.data
 })

const postSlice = createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        posts:[],
        error:null
    },

    extraReducers: (builder) =>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        })
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;