"use client";

import Map from "dotted-map";
import { useMemo } from "react";

interface DottedMapProps extends React.ComponentProps<"svg"> {
    radius?: number;
}

function DottedMap({ radius = 0.15, ...props }: DottedMapProps) {
    const points = useMemo(() => {
        const map = new Map({ height: 55, grid: "diagonal" });
        return map.getPoints();
    }, []);

    return (
        <svg viewBox="0 0 120 60" {...props}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={radius} fill="currentColor" />
            ))}
        </svg>
    );
}

export { DottedMap };
