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
export type PaintBucketFillProps = typeof __propDef.props;
export type PaintBucketFillEvents = typeof __propDef.events;
export type PaintBucketFillSlots = typeof __propDef.slots;
export default class PaintBucketFill extends SvelteComponentTyped<PaintBucketFillProps, PaintBucketFillEvents, PaintBucketFillSlots> {
}
export {};
