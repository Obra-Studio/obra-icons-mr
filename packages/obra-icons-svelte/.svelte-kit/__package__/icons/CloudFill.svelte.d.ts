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
export type CloudFillProps = typeof __propDef.props;
export type CloudFillEvents = typeof __propDef.events;
export type CloudFillSlots = typeof __propDef.slots;
export default class CloudFill extends SvelteComponentTyped<CloudFillProps, CloudFillEvents, CloudFillSlots> {
}
export {};
