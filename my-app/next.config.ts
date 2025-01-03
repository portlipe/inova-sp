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
          outputPath: 'static/videos/',
        },
      },
    });
    return config;
  },
  output: 'export', // Adiciona o export
  images: {
    unoptimized: true, // Desativa a otimização de imagens
  },
};

export default config;
