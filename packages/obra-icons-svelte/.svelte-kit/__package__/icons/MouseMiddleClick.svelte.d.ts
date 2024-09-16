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
export type MouseMiddleClickProps = typeof __propDef.props;
export type MouseMiddleClickEvents = typeof __propDef.events;
export type MouseMiddleClickSlots = typeof __propDef.slots;
export default class MouseMiddleClick extends SvelteComponentTyped<MouseMiddleClickProps, MouseMiddleClickEvents, MouseMiddleClickSlots> {
}
export {};
