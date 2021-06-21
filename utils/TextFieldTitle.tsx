import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';

interface ITitle {
  title: string;
  color: string;
  obligatory: boolean;
  style?: string;
}

const TextFieldTitle = (props: ITitle) => {
  const Obligatory = () => {
    if (props.obligatory) {
      return <span style={{ color: '#E53E3E' }}>*</span>;
    }
    return <></>;
  };

  return (
    <Typography
      style={{
        marginLeft: '5px',
        fontFamily: 'SF Pro Display, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        color: `${props.color}`
      }}
    >
      {props.title} <Obligatory />
    </Typography>
  );
};

export default TextFieldTitle;
