import { useSpring, animated } from "@react-spring/web";

interface RectangleProps {
  width: number
  height: number
  x: number
  y: number
};

const Rectangle: React.FC<RectangleProps> = ({width, height, x, y}) => {

  const springProps = useSpring({
    to: { x, y, width, height },
    config: {
      friction: 30,
    },
    delay: x,
  });

  if (y === undefined) {
    return null;
  }

  return (
    <animated.rect
      x={springProps.x}
      y={springProps.y}
      width={springProps.width}
      height={springProps.height}
      opacity={0.7}
      stroke="#9d174d"
      fill="#9d174d"
      fillOpacity={0.3}
      strokeWidth={1}
      rx={1}
    />
  );
};

export default Rectangle;
