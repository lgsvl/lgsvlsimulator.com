import { IconButtonProps } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import { fade, withTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useMemo } from 'react';
import { useAppState } from 'src/context/AppState';
import { useTranslation } from 'src/hooks/useTranslations';
import { px } from 'src/utils/theme';
import styled from 'styled-components';
import { IconPause, IconPlay } from './Icons';

// Temporary fix until material-ui 5.0, when missing ref typedef is included on Box
declare module '@material-ui/core/Box' {
  interface BoxProps {
    ref?: ((instance: unknown) => void) | React.MutableRefObject<unknown> | null;
  }
}

// Temporary filter to get he tvideo background color to match the site background until the videos get updated.
const cssVideoFilter = 'filter: saturate(0.7) contrast(1.01)';

type VideoProps = Omit<React.VideoHTMLAttributes<'video'>, 'children' | 'style'> & {
  style: React.CSSProperties;
  ref: React.MutableRefObject<HTMLVideoElement | undefined>;
};

const StyledVideo = withTheme(styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  ${cssVideoFilter};
`) as React.FC<Partial<VideoProps>>;

const StyledBox = withTheme(styled(Box)`
  ${({ theme }) => `
opacity: 0;
transition: ${theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })};

&:hover {
  opacity: 1;
}
`};
`) as React.FC<BoxProps>;

type OffsetValue = number | string;

type StyledIconButtonProps = BoxProps & { offset?: OffsetValue | [OffsetValue, OffsetValue] };

const StyledIconButton = withTheme(styled(
  React.forwardRef(({ offset, ...rest }: StyledIconButtonProps, ref) => <Box {...rest} ref={ref} />)
)`
  ${({ offset, theme }) => {
    const offsetX = offset instanceof Array ? offset[0] : offset || 0;
    const offsetY = offset instanceof Array ? offset[1] : 0;
    return `
      transform: translate(${offsetX}, ${offsetY});
      border-radius: 16px;
      padding: ${px(theme.spacing(2))};
      background-color: ${fade(theme.palette.background.paper, 0.6)};

      &:hover {
        background-color: ${fade(theme.palette.background.paper, 0.8)};
      }
    `;
  }}
`) as React.FC<StyledIconButtonProps>;

export interface BackgroundVideoProps extends BoxProps {
  fit?: 'cover' | 'contain';
  poster?: HTMLVideoElement['poster'];
  src?: HTMLSourceElement['src'];
  type?: HTMLSourceElement['type'];
  overlayOffset?: StyledIconButtonProps['offset'];
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  children,
  fit = 'contain',
  overlayOffset,
  title,
  src,
  poster,
  type = 'video/mp4',
  zIndex = -1,
  ...rest
}) => {
  const { t } = useTranslation();
  const {
    appState: {
      videos: { allPaused }
    },
    setAppState
  } = useAppState();

  const videoRef = React.useRef<HTMLVideoElement>();

  // Respond to appState changes
  useMemo(() => {
    if (allPaused) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [allPaused]);

  const handlePlayPauseAll = React.useCallback(() => {
    setAppState(!allPaused, 'videos.allPaused');
  }, [allPaused, setAppState]);

  const tooltipLabel = useMemo(() => (allPaused ? t('main.video.play') : t('main.video.pause')), [allPaused, t]);

  return (
    <Box
      height={1}
      width={1}
      position='relative'
      overflow='hidden'
      minHeight={300}
      {...rest}
      onClick={handlePlayPauseAll}
    >
      <StyledVideo
        controls={false}
        loop
        autoPlay={!allPaused}
        muted
        playsInline
        poster={poster || ''}
        ref={videoRef}
        style={{ objectFit: fit, zIndex }}
      >
        <source src={src} type={type} />
        {children}
      </StyledVideo>
      <StyledBox height={1} display='flex' alignItems='center' justifyContent='center'>
        <Tooltip title={tooltipLabel} aria-label={tooltipLabel} arrow>
          <StyledIconButton offset={overlayOffset}>{allPaused ? <IconPlay /> : <IconPause />}</StyledIconButton>
        </Tooltip>
      </StyledBox>
    </Box>
  );
};

export default BackgroundVideo;
export { BackgroundVideo };
