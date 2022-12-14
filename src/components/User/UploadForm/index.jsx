import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { ProjectContext } from '../../../context/ProjectContext';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function UploadForm() {
  const { project, setProject } = useContext(ProjectContext);

  const [images, setImages] = useState([]);
  const maxNumber = 12;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const sendToServer = async (e) => {
    e.preventDefault(); // ?
    console.log(images);
    try {
      const formData = new FormData();
      images.forEach((image, i) => {
        formData.append(`image-${i}`, image.file, image.file.name);
      });

      const url = BASE_URL + '/upload/images';

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': '"multipart/form-data"',
        },
        credentials: 'include',
        body: formData,
      });
      const data = await res.json();
      console.log('data:', data);
      // setProject(data.currentProject[0]);
      console.log('Image(s) saved on Client', data);
    } catch (err) {
      console.error(err);
    }

    console.log('We reach here...CommentForm');
    setImages([]);
  };

  return (
    <div className="App">
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url" acceptType={['jpg']}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button variant="outlined" size="small" style={isDragging ? { color: 'red' } : null} onClick={onImageUpload} {...dragProps}>
              Upload Images
            </Button>
            &nbsp;
            <Button variant="outlined" size="small" onClick={onImageRemoveAll}>
              Remove all
            </Button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <Button variant="outlined" size="small" onClick={() => onImageUpdate(index)}>
                    Update
                  </Button>
                  <Button variant="outlined" size="small" onClick={() => onImageRemove(index)}>
                    Remove
                  </Button>
                </div>
                <div>
                  {imageList ? (
                    <Button variant="outlined" size="small" onClick={sendToServer}>
                      Upload
                    </Button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadForm;
