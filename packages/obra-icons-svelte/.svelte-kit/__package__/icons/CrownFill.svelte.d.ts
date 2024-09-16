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
export type CrownFillProps = typeof __propDef.props;
export type CrownFillEvents = typeof __propDef.events;
export type CrownFillSlots = typeof __propDef.slots;
export default class CrownFill extends SvelteComponentTyped<CrownFillProps, CrownFillEvents, CrownFillSlots> {
}
export {};
