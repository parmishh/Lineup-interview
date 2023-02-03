import * as UploadApi from "../api/UploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action start")
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const othername=()=> {
  var tt = document.getElementById("poke").value;
  findString(tt);
  
}
export const findString=(text)=> {
  document.querySelector("#output").textContent=`String found? ${window.find(text)}`;
};




export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost =await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
