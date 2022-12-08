import Close from '../../assets/svg/Close';
import classes from './PreviewModal.module.css';

export default function PreviewModal(props: { onClose: () => void, previewWEBPSrc: string | null, previewAlt: string, previewSrc: string }): JSX.Element {
    const { previewWEBPSrc, previewAlt, previewSrc, onClose } = props;
    
    return (
        <div className={classes.previewModal}>
            <Close onClose={onClose}/>
            
            <picture>
                {previewWEBPSrc && <source
                    srcSet={previewWEBPSrc}
                    type="image/webp"
                />}
                
                <img src={previewSrc} alt={previewAlt} />
            </picture>
        </div>
    )
}