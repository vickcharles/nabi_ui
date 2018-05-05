import * as React from 'react';
// import Typography from 'material-ui/Typography';
import CropprWrapper from './CropprWrapper';

interface ImageUploaderProps {
  imageChanged( avatar: string ): void;
}
/**
 * Avatar Cropper  and Uploader on Base 64
 * 
 * @param {ImageUploaderProps} props 
 * @returns 
 */
const ImageUploader = (props: ImageUploaderProps) => {
    return (
        <div style={{textAlign: 'center', padding: '1em', maxWidth: '380px', margin: '1em auto'}}>
            <CropprWrapper imageChanged={(avatar: string) => props.imageChanged(avatar)} />
        </div>
    );
};

export default ImageUploader;
