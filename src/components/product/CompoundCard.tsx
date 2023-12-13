function CompoundCard({ clx, children }: any) {
    return (
        <div className={clx}>
            {children}
        </div>
    )
}

function CardContent({ clx, children, tag: Tag = "div" }: any) {
    return (
        <Tag className={clx}>
            {children}
        </Tag>
    )
}

function CardTitle({ clx, title }: any) {
    return (
        <h3 className={clx}>{title}</h3>
    )
}

function CardPrice({ clx, price }: any) {
    return (
        <div className={clx}>${price}</div>
    )
}

function CardButton({ clx, handleClick, image, title }: any) {
    return (
        <button className={clx} onClick={handleClick}>
            {title}
            {image}
        </button>
    )
}

function CardImage({ image }: any) {
    return (
        <img src={image}></img>
    )
}


CompoundCard.Content = CardContent;
CompoundCard.Title = CardTitle;
CompoundCard.Price = CardPrice;
CompoundCard.Image = CardImage;
CompoundCard.Button = CardButton;

export default CompoundCard;