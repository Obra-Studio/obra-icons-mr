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
export type MouseLeftClickProps = typeof __propDef.props;
export type MouseLeftClickEvents = typeof __propDef.events;
export type MouseLeftClickSlots = typeof __propDef.slots;
export default class MouseLeftClick extends SvelteComponentTyped<MouseLeftClickProps, MouseLeftClickEvents, MouseLeftClickSlots> {
}
export {};
