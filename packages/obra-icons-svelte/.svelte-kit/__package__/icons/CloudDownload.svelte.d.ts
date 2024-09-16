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
export type CloudDownloadProps = typeof __propDef.props;
export type CloudDownloadEvents = typeof __propDef.events;
export type CloudDownloadSlots = typeof __propDef.slots;
export default class CloudDownload extends SvelteComponentTyped<CloudDownloadProps, CloudDownloadEvents, CloudDownloadSlots> {
}
export {};
