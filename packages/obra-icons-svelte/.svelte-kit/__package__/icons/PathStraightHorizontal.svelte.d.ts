import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PathStraightHorizontalProps = typeof __propDef.props;
export type PathStraightHorizontalEvents = typeof __propDef.events;
export type PathStraightHorizontalSlots = typeof __propDef.slots;
export default class PathStraightHorizontal extends SvelteComponentTyped<PathStraightHorizontalProps, PathStraightHorizontalEvents, PathStraightHorizontalSlots> {
}
export {};
