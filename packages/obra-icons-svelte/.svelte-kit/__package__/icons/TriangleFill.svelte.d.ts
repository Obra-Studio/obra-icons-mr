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
export type TriangleFillProps = typeof __propDef.props;
export type TriangleFillEvents = typeof __propDef.events;
export type TriangleFillSlots = typeof __propDef.slots;
export default class TriangleFill extends SvelteComponentTyped<TriangleFillProps, TriangleFillEvents, TriangleFillSlots> {
}
export {};
