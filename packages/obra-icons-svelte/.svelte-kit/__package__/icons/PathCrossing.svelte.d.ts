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
export type PathCrossingProps = typeof __propDef.props;
export type PathCrossingEvents = typeof __propDef.events;
export type PathCrossingSlots = typeof __propDef.slots;
export default class PathCrossing extends SvelteComponentTyped<PathCrossingProps, PathCrossingEvents, PathCrossingSlots> {
}
export {};
