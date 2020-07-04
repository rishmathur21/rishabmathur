// Wrapper around ScrollMenu
import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';



const Arrow = ({ direction, className }) => {
    if (direction === 'right') {
        return (<div className={className}> <i className='fa  fa-arrow-right' aria-hidden='true'></i> </div>);
    }
    else if (direction === 'left') {
        return (<div className={className}> <i className='fa  fa-arrow-left' aria-hidden='true'></i> </div>);
    }
};
const ArrowLeft = Arrow({ direction: 'left', className: 'arrow-prev' });
const ArrowRight = Arrow({ direction: 'right', className: 'arrow-next' });


// One item component
// selected prop will be passed
const MenuItem = ({ item }) => {
    // TODO: abstract images/portfolio path to a constants file.
    // const tempStyle = { 'width': '350px' };

    return (
        <div className="menu-item journal-item">
            <div className="item-wrap">
                <a href={item.url} target="_blank">
                    <img className='menu-image' alt={item.title} src={process.env.PUBLIC_URL + `/images/`+ item.image} />
                    <div className="overlay">
                        <div className="journal-item-meta">
                            <h5>{item.title}</h5>
                            <p>{item.category} </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
};

// All items component
// Important! add unique key
const Menu = (items) =>
    items.map(item => {
        return <MenuItem item={item} key={item.title} />;
    });

class ScrollingMenu extends Component {
    render() {
        if (this.props.data) {
            var menuItems = Menu(this.props.data)
        };

        return (
            <div className='portfolio-wrapper'>

                <ScrollMenu
                    hideArrows={true}
                    hideSingleArrow={true}
                    data={menuItems}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    alignCenter={false}
                    wheel={false}
                    dragging={false}
                    clickWhenDrag={false}
                    itemClassActive={''}

                />

            </div>

        )

    }
}

export default ScrollingMenu;