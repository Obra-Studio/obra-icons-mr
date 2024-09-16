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
export type MouseRightClickProps = typeof __propDef.props;
export type MouseRightClickEvents = typeof __propDef.events;
export type MouseRightClickSlots = typeof __propDef.slots;
export default class MouseRightClick extends SvelteComponentTyped<MouseRightClickProps, MouseRightClickEvents, MouseRightClickSlots> {
}
export {};
