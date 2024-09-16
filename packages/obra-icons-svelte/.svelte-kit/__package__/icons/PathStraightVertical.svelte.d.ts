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
export type PathStraightVerticalProps = typeof __propDef.props;
export type PathStraightVerticalEvents = typeof __propDef.events;
export type PathStraightVerticalSlots = typeof __propDef.slots;
export default class PathStraightVertical extends SvelteComponentTyped<PathStraightVerticalProps, PathStraightVerticalEvents, PathStraightVerticalSlots> {
}
export {};
