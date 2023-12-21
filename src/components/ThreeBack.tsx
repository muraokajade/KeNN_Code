"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
interface AnimationSC {
  animationScripts: { [key: string]: any }; // キーと値の型を任意の型に置き換えるべきです
}

const CanvasBack = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const boxGeometry = new THREE.BoxGeometry(5, 5, 5, 10);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 0.5, -15);
    box.rotation.set(1, 1, 0);
    const torusGeometry = new THREE.TorusGeometry(8, 2, 16, 100);
    const torusMaterial = new THREE.MeshNormalMaterial();
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(0, 1, 10);
    scene.add(box, torus);


    


    function lerp(x: number, y: number, a: number): number {
      return (1 - a) * x + a * y;
    }

    function scalePercent(start: number, end: number) {
      return (scrollParcent - start) / (end - start);
    }

    const animationScripts: any[] = [];

    animationScripts.push({
      start: 0,
      end: 40,
      function() {
        camera.lookAt(box.position);
        camera.position.set(0, 1, 10);
        box.position.z = lerp(-15, 2, scalePercent(0, 40));
        torus.position.z = lerp(10, -20, scalePercent(0, 40));
      },
    });
    animationScripts.push({
      start: 40,
      end: 60,
      function() {
        camera.lookAt(box.position);
        camera.position.set(0, 1, 10);
        box.rotation.z = lerp(1, Math.PI, scalePercent(40, 60));
      },
    });
    animationScripts.push({
      start: 60,
      end: 80,
      function() {
        camera.lookAt(box.position);
        camera.position.x = lerp(0, -15, scalePercent(60, 80));
      },
    });
    animationScripts.push({
      start: 80,
      end: 100,
      function() {
        camera.lookAt(box.position);
        box.rotation.x += 0.02;
        box.rotation.y += 0.02;
      },
    });

    //アニメーションを開始
    function playScrollAnimation() {
      animationScripts.forEach((animation) => {
        if (scrollParcent >= animation.start && scrollParcent <= animation.end)
          animation.function();
      });
    }

    let scrollParcent = 0;
    document.body.onscroll = () => {
      scrollParcent =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;
    };

    const tick = () => {
      window.requestAnimationFrame(tick);
      playScrollAnimation();
      renderer.render(scene, camera);
    };
    tick();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされたときにイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      style={{
        backgroundImage: "url(/images/space.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-y",
      }}
      className="min-h-screen pt-24 w-full fixed top-0 left-0 z-[-10]"
      ref={canvasRef}
      id="canvas"
    ></canvas>
  );
};

const Test2 = () => {
  return (
    <div className="text-white">
      <CanvasBack />
    </div>
  );
};

export default Test2;
