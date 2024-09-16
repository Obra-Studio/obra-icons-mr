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
export type AlignGroupVerticalCenterProps = typeof __propDef.props;
export type AlignGroupVerticalCenterEvents = typeof __propDef.events;
export type AlignGroupVerticalCenterSlots = typeof __propDef.slots;
export default class AlignGroupVerticalCenter extends SvelteComponentTyped<AlignGroupVerticalCenterProps, AlignGroupVerticalCenterEvents, AlignGroupVerticalCenterSlots> {
}
export {};
