<template>
    <div class="bg-portfolio-teal-dark min-h-screen text-white p-8">
        <div class="max-w-6xl mx-auto">
            <h1 class="text-4xl font-bold mb-8 text-center animate__animated animate__fadeIn">My Projects</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Card 1 -->
                <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg animate__animated animate__fadeIn">
                    <!-- <img src="project1-image.jpg" alt="Project 1" class="w-full h-48 object-cover"> -->
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Project Name 1</h3>
                        <p class="text-gray-300 mb-4">A brief description of the project and its main features.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-600 rounded-full text-sm">Vue.js</span>
                            <span class="px-3 py-1 bg-blue-600 rounded-full text-sm">Node.js</span>
                        </div>
                        <div class="flex space-x-4">
                            <a href="#" class="text-blue-400 hover:text-blue-300">Live Demo</a>
                            <a href="#" class="text-blue-400 hover:text-blue-300">GitHub</a>
                        </div>
                    </div>
                </div>

                <!-- Project Card 2 -->
                <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg animate__animated animate__fadeIn">
                    <!-- <img src="project2-image.jpg" alt="Project 2" class="w-full h-48 object-cover"> -->
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Project Name 2</h3>
                        <p class="text-gray-300 mb-4">Another amazing project with its own unique features.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-blue-600 rounded-full text-sm">React</span>
                            <span class="px-3 py-1 bg-blue-600 rounded-full text-sm">MongoDB</span>
                        </div>
                        <div class="flex space-x-4">
                            <a href="#" class="text-blue-400 hover:text-blue-300">Live Demo</a>
                            <a href="#" class="text-blue-400 hover:text-blue-300">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script> 