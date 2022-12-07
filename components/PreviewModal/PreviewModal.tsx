import Close from '../../assets/svg/Close'

export default function PreviewModal(props: { onClose: () => void, previewWEBPSrc: string | null, previewAlt: string, previewSrc: string }): JSX.Element {
    const { previewWEBPSrc, previewAlt, previewSrc, onClose } = props;
    
    return (
        <div className="preview-modal">
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