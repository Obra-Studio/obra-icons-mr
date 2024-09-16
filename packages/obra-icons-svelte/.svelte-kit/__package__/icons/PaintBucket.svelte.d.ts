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
export type PaintBucketProps = typeof __propDef.props;
export type PaintBucketEvents = typeof __propDef.events;
export type PaintBucketSlots = typeof __propDef.slots;
export default class PaintBucket extends SvelteComponentTyped<PaintBucketProps, PaintBucketEvents, PaintBucketSlots> {
}
export {};
