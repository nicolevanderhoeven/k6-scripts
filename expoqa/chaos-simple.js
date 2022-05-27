import { Kubernetes } from 'k6/x/kubernetes';
import { KubernetesChaos } from "https://raw.githubusercontent.com/grafana/k6-chaos/main/src/kubernetes.js";

export default function () {
    const k8sClient = new Kubernetes();
    const k8sChaos = new KubernetesChaos(k8sClient);
    k8sChaos.killRandomPod('test-services-k6-io');

}