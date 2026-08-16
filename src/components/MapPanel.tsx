import { MAP_LINKS, MAP_POS, ROOMS } from "@/lib/game-data";

const CELL_W = 96;
const CELL_H = 58;
const PAD = 30;
const NODE_W = 74;
const NODE_H = 26;

const cx = (x: number) => PAD + x * CELL_W + NODE_W / 2;
const cy = (y: number) => PAD + y * CELL_H + NODE_H / 2;

const COLS = Math.max(...Object.values(MAP_POS).map((p) => p.x)) + 1;
const ROWS = Math.max(...Object.values(MAP_POS).map((p) => p.y)) + 1;
const W = PAD * 2 + (COLS - 1) * CELL_W + NODE_W;
const H = PAD * 2 + (ROWS - 1) * CELL_H + NODE_H;

export function MapPanel({
  current,
  visited,
  onTravel,
}: {
  current: string;
  visited: string[];
  onTravel: (dir: string) => void;
}) {
  const seen = new Set(visited);
  const here = ROOMS[current]!;
  const neighbors = new Map(
    Object.entries(here.exits).map(([dir, dest]) => [dest, dir] as const),
  );

  return (
    <div className="crt-map">
      <div className="crt-map-title">
        <span>SECTOR MAP</span>
        <span>
          {visited.length}/{Object.keys(MAP_POS).length} EXPLORED
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="crt-map-svg" role="img" aria-label="Explored map">
        {MAP_LINKS.map(([a, b]) => {
          const pa = MAP_POS[a];
          const pb = MAP_POS[b];
          if (!pa || !pb) return null;
          const known = seen.has(a) && seen.has(b);
          const adjacent = a === current || b === current;
          if (!seen.has(a) && !seen.has(b)) return null;
          return (
            <line
              key={`${a}-${b}`}
              x1={cx(pa.x)}
              y1={cy(pa.y)}
              x2={cx(pb.x)}
              y2={cy(pb.y)}
              className="crt-map-link"
              data-state={known ? (adjacent ? "live" : "known") : "hint"}
            />
          );
        })}

        {Object.entries(MAP_POS).map(([id, p]) => {
          const isHere = id === current;
          const isSeen = seen.has(id);
          const dir = neighbors.get(id);
          const state = isHere ? "here" : isSeen ? "seen" : dir ? "adjacent" : "unknown";
          const label = isSeen || dir ? p.short : "??????";
          const x = PAD + p.x * CELL_W;
          const y = PAD + p.y * CELL_H;
          return (
            <g
              key={id}
              className="crt-map-node"
              data-state={state}
              onClick={dir && !isHere ? () => onTravel(dir) : undefined}
              style={dir && !isHere ? { cursor: "pointer" } : undefined}
            >
              <rect x={x} y={y} width={NODE_W} height={NODE_H} rx={3} />
              <text x={x + NODE_W / 2} y={y + NODE_H / 2 + 3.5} textAnchor="middle">
                {label}
              </text>
              {dir && !isHere ? (
                <title>{`Go ${dir} to ${label}`}</title>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
