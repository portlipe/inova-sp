// next.config.ts
import { NextConfig } from 'next'

const config: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/videos/', // Caminho de saída para os arquivos de vídeo
        },
      },
    });

    return config;
  },
};

export default config;
