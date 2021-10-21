import * as React from 'react';
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';

const ButtonRoot = React.forwardRef((props, ref) => {
  const { children, ...other } = props;

  return (
    <svg width="200" height="70" {...other} ref={ref}>
      <polygon points="0,90 0,0 250,0 200,90" className="bg" />
      <polygon points="0,90 0,0 250,0 200,90" className="borderEffect" />
      <foreignObject x="-20" y="-6" width="250" height="100">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

{/* <polygon points="0,0 0,200 200,0" class="borderEffect"></polygon>
<foreignObject x="-10" y="40" width="150" height="50"><div class="content">Sign Up</div></foreignObject> */}

{/* <polygon points="0,50 0,0 150,0 150,50" className="bg" />
<polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
<foreignObject x="0" y="0" width="150" height="50"></foreignObject> */}

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${
  theme.palette.mode === 'light' ? 'rgb(25,118,210)' : 'rgb(144,202,249)'
};
  --hover-color: ${
  theme.palette.mode === 'light'
    ? 'rgba(25,118,210,0.04)'
    : 'rgba(144,202,249,0.08)'
};
  --active-color: ${
  theme.palette.mode === 'light'
    ? 'rgba(25,118,210,0.12)'
    : 'rgba(144,202,249,0.24)'
};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 3;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: PM-semi-bold, Helvetica, Inter, Arial, sans-serif;
      font-size: 25px;
      font-weight: 600;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef((props, ref) => <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />);

export default function UnstyledButtonCustom() {
  return (
    <SvgButton style={{
      position: 'absolute',
      bottom: '18vh',
      left: '12vw',
      '--main-color': 'rgb(255 255 255)',
      '--hover-color': 'rgb(25 118 210 / 60%)',
      '--active-color': 'rgb(25 118 210)',
    }}
    >
      Sign Up
    </SvgButton>
  );
}

// --main-color: rgb(255 255 255);
// --hover-color: rgb(25 118 210 / 60%);
// --active-color: rgb(25 118 210);
