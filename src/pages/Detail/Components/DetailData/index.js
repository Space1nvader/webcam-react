import React from 'react';
import RemoveButton from 'components/RemoveButton';
import ContactLink from 'components/ContactLink';
import Income from '../Income';

const DetailData = (props) => {
  const { data } = props;
  return (
    <>
      <h5 className="detail__name">
        {data.user.name} <br /> / {data.user.nickname}
      </h5>
      <div className="detail__contacts">
        <ContactLink
          style={{ color: 'var(--blue-100)', display: 'block', marginBottom: 12 }}
          href="mailto:ivanova@gmail.com"
        >
          ivanova@gmail.com
        </ContactLink>
        <ContactLink
          style={{ color: 'var(--gray-30)', display: 'block' }}
          href="tel:8 (964) 457 54-54"
        >
          8 (964) 457 54-54
        </ContactLink>
      </div>
      <div className="detail__income">
        <Income />
      </div>
      <div className="detail__remove">
        <RemoveButton>удалить</RemoveButton>
      </div>
    </>
  );
};

export default DetailData;
