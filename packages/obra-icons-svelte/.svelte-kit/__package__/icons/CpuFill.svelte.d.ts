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
export type CpuFillProps = typeof __propDef.props;
export type CpuFillEvents = typeof __propDef.events;
export type CpuFillSlots = typeof __propDef.slots;
export default class CpuFill extends SvelteComponentTyped<CpuFillProps, CpuFillEvents, CpuFillSlots> {
}
export {};
