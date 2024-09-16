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
export type FlaskProps = typeof __propDef.props;
export type FlaskEvents = typeof __propDef.events;
export type FlaskSlots = typeof __propDef.slots;
export default class Flask extends SvelteComponentTyped<FlaskProps, FlaskEvents, FlaskSlots> {
}
export {};
