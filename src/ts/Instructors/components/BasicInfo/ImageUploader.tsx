import * as React from 'react';
import ImageCropper from './ImageCropper';

/**
 * Props for ImageUploader
 * @interface ImageUploaderProps 
 */
interface ImageUploaderProps {
  imageChanged( avatar: string ): void;
}

/**
 * Wraps ImageCropper
 * @param {ImageUploaderProps} props - The component's props 
 */
const ImageUploader = (props: ImageUploaderProps) => {
    return (
        <div style={{textAlign: 'center', padding: '1em', maxWidth: '380px', margin: 'auto'}}>
            <ImageCropper imageChanged={(avatar: string) => props.imageChanged(avatar)} />
        </div>
    );
};

export default ImageUploader;
