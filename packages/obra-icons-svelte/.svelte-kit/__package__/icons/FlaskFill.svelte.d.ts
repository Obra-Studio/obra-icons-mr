import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FlaskFillProps = typeof __propDef.props;
export type FlaskFillEvents = typeof __propDef.events;
export type FlaskFillSlots = typeof __propDef.slots;
export default class FlaskFill extends SvelteComponentTyped<FlaskFillProps, FlaskFillEvents, FlaskFillSlots> {
}
export {};
