import { Kubernetes } from 'k6/x/kubernetes';
import { KubernetesChaos } from "https://raw.githubusercontent.com/grafana/k6-chaos/main/src/kubernetes.js";
import { sleep } from 'k6';

export default function () {
    chaos();
}

export function chaos () {
    const k8sClient = new Kubernetes();
    const k8sChaos = new KubernetesChaos(k8sClient);
    const namespace = 'test-services-k6-io';

    k8sChaos.killRandomPod(namespace);
    sleep(Math.random() * 5);
  
}