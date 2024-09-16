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
export type WarningTriangleFillProps = typeof __propDef.props;
export type WarningTriangleFillEvents = typeof __propDef.events;
export type WarningTriangleFillSlots = typeof __propDef.slots;
export default class WarningTriangleFill extends SvelteComponentTyped<WarningTriangleFillProps, WarningTriangleFillEvents, WarningTriangleFillSlots> {
}
export {};
