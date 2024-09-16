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
export type CloudDeployProps = typeof __propDef.props;
export type CloudDeployEvents = typeof __propDef.events;
export type CloudDeploySlots = typeof __propDef.slots;
export default class CloudDeploy extends SvelteComponentTyped<CloudDeployProps, CloudDeployEvents, CloudDeploySlots> {
}
export {};
