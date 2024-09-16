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
export type CloudUploadProps = typeof __propDef.props;
export type CloudUploadEvents = typeof __propDef.events;
export type CloudUploadSlots = typeof __propDef.slots;
export default class CloudUpload extends SvelteComponentTyped<CloudUploadProps, CloudUploadEvents, CloudUploadSlots> {
}
export {};
