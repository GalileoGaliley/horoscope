import React, {JSX} from 'react';
import './TileItem.scss';

interface OwnProps {
  Icon: () => JSX.Element;
  title: string;
  active: boolean;
  onClick: () => void;
}
const TileItem = ({Icon, title, active, onClick}: OwnProps) => {
  return (
    <div onClick={onClick} className={'tile-item'}>
      <div className={`tile-item__container ${active ? 'tile-item_active' : ''}`}>
        <Icon />
        <div className={'tile-item__title'}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default TileItem;
