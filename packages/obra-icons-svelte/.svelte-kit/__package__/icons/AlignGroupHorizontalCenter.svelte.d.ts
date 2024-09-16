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
export type AlignGroupHorizontalCenterProps = typeof __propDef.props;
export type AlignGroupHorizontalCenterEvents = typeof __propDef.events;
export type AlignGroupHorizontalCenterSlots = typeof __propDef.slots;
export default class AlignGroupHorizontalCenter extends SvelteComponentTyped<AlignGroupHorizontalCenterProps, AlignGroupHorizontalCenterEvents, AlignGroupHorizontalCenterSlots> {
}
export {};
