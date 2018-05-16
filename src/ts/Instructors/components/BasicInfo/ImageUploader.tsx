import * as React from 'react';
import CropprWrapper from './CropprWrapper';

/**
 * Props interface for ImageUploader
 * @interface ImageUploaderProps 
 */
interface ImageUploaderProps {
  imageChanged( avatar: string ): void;
}

/**
 * Wraps AvatarCropper
 * @param {ImageUploaderProps} props - The component's props 
 */
const ImageUploader = (props: ImageUploaderProps) => {
    return (
        <div style={{textAlign: 'center', padding: '1em', maxWidth: '380px', margin: 'auto'}}>
            <CropprWrapper imageChanged={(avatar: string) => props.imageChanged(avatar)} />
        </div>
    );
};

export default ImageUploader;
