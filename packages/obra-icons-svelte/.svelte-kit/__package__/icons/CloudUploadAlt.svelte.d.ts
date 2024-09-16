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
export type CloudUploadAltProps = typeof __propDef.props;
export type CloudUploadAltEvents = typeof __propDef.events;
export type CloudUploadAltSlots = typeof __propDef.slots;
export default class CloudUploadAlt extends SvelteComponentTyped<CloudUploadAltProps, CloudUploadAltEvents, CloudUploadAltSlots> {
}
export {};
