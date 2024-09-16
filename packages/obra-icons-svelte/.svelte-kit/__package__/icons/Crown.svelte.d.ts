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
export type CrownProps = typeof __propDef.props;
export type CrownEvents = typeof __propDef.events;
export type CrownSlots = typeof __propDef.slots;
export default class Crown extends SvelteComponentTyped<CrownProps, CrownEvents, CrownSlots> {
}
export {};
