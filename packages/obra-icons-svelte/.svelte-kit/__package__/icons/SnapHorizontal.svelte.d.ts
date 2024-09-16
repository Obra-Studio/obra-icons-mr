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
export type SnapHorizontalProps = typeof __propDef.props;
export type SnapHorizontalEvents = typeof __propDef.events;
export type SnapHorizontalSlots = typeof __propDef.slots;
export default class SnapHorizontal extends SvelteComponentTyped<SnapHorizontalProps, SnapHorizontalEvents, SnapHorizontalSlots> {
}
export {};
