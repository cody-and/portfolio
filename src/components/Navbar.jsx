import React, { useRef, useState, useEffect } from 'react';
import { useGesture } from '@use-gesture/react';
import { animated, useSpring, useSprings } from '@react-spring/web';
import { Link as ScrollLink } from 'react-scroll';
import { globalStyles } from '../style/global';
import { styled } from '../style/stiches.config';
import menuIcon from '../assets/menu-icon.svg';
import { FaCircleInfo, FaBook, FaHouseChimney, FaLaptopCode, FaCode, FaFileLines } from 'react-icons/fa6';

const BUTTON_SIZE = 60;

const COLORS = ['#45c4f3', '#45c4f3', '#45c4f3', '#45c4f3', '#45c4f3', '#45c4f3'];

const Navbar = () => {
  globalStyles();

  const buttonRef = useRef(null);
  const avatarRefs = useRef([]);
  const avatarRefInitialPositions = useRef([]);
  const containerRef = useRef(null);
  const backgroundTimeoutRef = useRef(null);
  const avatarTimeoutRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [{ x, y, opacity }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    opacity: 0,
  }));

  const [avatarSprings, avatarApi] = useSprings(
    COLORS.length,
    (i) => ({
      y: 0,
    })
  );

  useEffect(() => {
    if (avatarRefInitialPositions.current.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();

      avatarRefInitialPositions.current = avatarRefs.current.map(
        (node) => buttonY - node.getBoundingClientRect().y
      );
    }

    avatarApi.start((i) => ({
      y: avatarRefInitialPositions.current[i],
      immediate: true,
    }));
  }, []);

  const getBounds = () => {
    const { height, width } = containerRef.current.getBoundingClientRect();

    return {
      top: 0,
      left: 0,
      right: window.innerWidth - width,
      bottom: window.innerHeight - height,
    };
  };

  const bindGestures = useGesture(
    {
      onDrag: ({ down, offset: [ox, oy], velocity: [vx, vy], direction: [dx, dy] }) => {
        api.start({
          x: ox,
          y: oy,
          immediate: down,
          onChange: ({ value }) => {
            const bounds = getBounds();
            if (!(value.x >= bounds.left && value.x <= bounds.right && value.y >= bounds.top && value.y <= bounds.bottom)) {
              api.set({
                x: value.x < bounds.left ? bounds.left : value.x > bounds.right ? bounds.right : value.x,
                y: value.y < bounds.top ? bounds.top : value.y > bounds.bottom ? bounds.bottom : value.y,
              });
            }
          },
          config: (key) => ({
            velocity: key === 'x' ? vx * dx : vy * dy,
            decay: true,
          }),
        });
      },
      onPointerEnter: () => {
        setIsMenuOpen(true);
        if (backgroundTimeoutRef.current) {
          clearTimeout(backgroundTimeoutRef.current);
        }
        if (avatarTimeoutRef.current) {
          clearTimeout(avatarTimeoutRef.current);
        }

        api.start({
          opacity: 1,
        });

        avatarApi.start({
          y: 0,
        });
      },
      onPointerLeave: () => {
        setIsMenuOpen(false);
        backgroundTimeoutRef.current = setTimeout(() => {
          api.start({
            opacity: 0,
          });
        }, 1000);

        avatarTimeoutRef.current = setTimeout(() => {
          avatarApi.start((i) => ({
            y: avatarRefInitialPositions.current[i],
          }));
        }, 10000);
      },
    },
    {
      drag: {
        from: () => [x.get(), y.get()],
        bounds: getBounds,
        rubberband: true,
      },
    }
  );

  const handlePointerDown = (isBackground) => (e) => {
    if (isBackground && !isMenuOpen) {
      return;
    }

    if (onPointerDown) {
      onPointerDown(e);
    }
  };

  const { onPointerDown, ...restGestures } = bindGestures();

  return (
    <>
      <BlurredBackground
        ref={containerRef}
        onPointerDown={handlePointerDown(true)}
        {...restGestures}
        style={{
          x,
          y,
          backgroundColor: opacity.to((o) => `rgba(0,0,0,${0.2 * o})`),
        }}
      >
        <GrabberButton style={{ opacity }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </GrabberButton>
        {avatarSprings.map((springs, index) => (
          <ScrollLink
            key={COLORS[index]}
            to={CustomPaths[index]}
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            css={{
              textDecoration: 'none',
              color: 'inherit',
              '&:visited': {
                color: 'inherit',
              },
            }}
          >
            <AvatarIcon
              ref={(ref) => (avatarRefs.current[index] = ref)}
              css={{
                backgroundColor: COLORS[index],
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px',
              }}
              style={springs}
            >
              {React.createElement(AvatarIcons[index], { size: 25 })}
            </AvatarIcon>
          </ScrollLink>
        ))}
        <FloatingButton
          ref={buttonRef}
          onPointerDown={handlePointerDown(false)}
          {...restGestures}
          style={{
            boxShadow: opacity.to((o) => `0px 3px 8px 2px rgba(0,0,0,${0.4 * 1 - o})`),
          }}
        >
          <span>
            <img src={menuIcon} alt="Menu Icon" style={{ width: '25px', height: '25px' }} />
          </span>
        </FloatingButton>
      </BlurredBackground>
    </>
  );
};

const BlurredBackground = styled(animated.div, {
  position: 'fixed',
  top: '20px',
  left: '20px',
  padding: '10px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  backdropFilter: 'blur(8px)',
  alignItems: 'center',
  touchAction: 'none',
});

const GrabberButton = styled(animated.button, {
  height: 15,
  borderRadius: 8,
  backgroundColor: 'black',
  border: 'none',
  mx: 8,
  mb: 4,
  width: 'calc(100% - 16px)',

  '& > svg': {
    color: 'white',
    transform: `rotate(90deg)`,
  },
});

const AvatarIcon = styled(animated.div, {
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  borderRadius: '50%',
  mx: 4,
});

const AvatarIcons = [
  FaHouseChimney,
  FaCircleInfo,
  FaBook,
  FaCode,
  FaLaptopCode,
  FaFileLines,
];

const CustomPaths = [
  'home',
  'about',
  'education',
  'techstack',
  'projects',
  'resume',
];

const FloatingButton = styled(animated.div, {
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  borderRadius: '50%',
  border: 'none',
  position: 'relative',
  backgroundClip: 'content-box',
  zIndex: 0,
  touchAction: 'none',

  '&:focus-visible': {
    outlineOffset: 2,
    outline: '#569AFF99 auto 6px',
  },

  '& > span': {
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
  },
});

export default Navbar;
